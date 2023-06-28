import { useState, useEffect, React } from 'react';
import { Document, Page, pdfjs} from 'react-pdf'
import {useLocation} from 'react-router-dom'
import './BlogPost.css';
import Container from '@mui/material/Container';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function BlogPost() {
    
    const [numPages, setNumPages] = useState(1);
    const state = useLocation().state;
    
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
        </div>
        <div className='blog'>
          <Document file={state.blog.content} onLoadSuccess={onDocumentLoadSuccess}>
              {Array.apply(null, Array(numPages))
              .map((x, i)=>i+1)
              .map(page => <Page pageNumber={page} renderPDF = {false} renderTextLayer={false}/>)}
          </Document>
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