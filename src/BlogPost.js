import { useState, useEffect, React } from 'react';
import { Document, Page, pdfjs} from 'react-pdf'
import {useLocation} from 'react-router-dom'
import ReactMarkdown from 'react-markdown';
import './BlogPost.css';
import Container from '@mui/material/Container';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function BlogPost() {
    const [numPages, setNumPages] = useState(1);
    const state = useLocation().state;
    //const md = require(state.blog.content)
    const [markdown, setMarkdown] = useState("");
    const [postMarkdown, setPostMarkdown] = useState('');

    useEffect(() => {
      fetch(state.blog.content)
        .then((response) => response.text())
        .then((text) => {
          setMarkdown(text);
        });
    }, [state.blog.content]);
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div className='body'>
        <Container maxWidth = "lg">
        <div className = "text">
          <h4>{state.blog.name}</h4>
          
          <p>{state.blog.summary}</p>
          <p1>Authored by: {state.blog.author}</p1>
          <hr></hr>
        </div>
        <div className='blog'>
          {(state.blog.format == "PDF" || !state.blog.format) &&
            <Document file={state.blog.content} onLoadSuccess={onDocumentLoadSuccess}>
              {Array.apply(null, Array(numPages))
              .map((x, i)=>i+1)
              .map(page => <Page pageNumber={page} renderPDF = {false} renderTextLayer={false}/>)}
          </Document>
          }
          {state.blog.format == "Markdown" && <div>
            <ReactMarkdown className = "markdown" children={markdown} />
          </div>}
        </div>
        </Container>
        </div>
    );
};
export default BlogPost;

/* 

import { useState, useEffect, React } from 'react';
import { Document, Page, pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
{blogName && <div>
    <h3>{blogName.name}</h3>
    <p>{blogName.summary}</p>
    <img src = {blogName.image} />
    <p>{<Document file= {blogName.content} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber = {2} />
      </Document>}
    </p>
  </div>}  */