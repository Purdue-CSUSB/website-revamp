import { useState, useEffect, React } from 'react';
import { Document, Page, pdfjs } from 'react-pdf'
import {useLocation} from 'react-router-dom'


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function BlogPost() {
    
    const [numPages, setNumPages] = useState(1);
    const state = useLocation().state;
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    return (
        <div className='body'>
        <h3>{state.blog.name}</h3>
        <p>{state.blog.summary}</p>
        <img src = {state.blog.image} />
        <p>{<Document file= {state.blog.content} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber = {2} />
        </Document>}
        </p>
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