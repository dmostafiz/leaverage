import React, { useState } from 'react';
import dynamic from 'next/dynamic';
// import {Quill} from 'react-quill'
const ReactQuill = dynamic(
    () => import('react-quill'),
    { ssr: false }
  )

const Quill  = dynamic(
    () => import('quill'),
    { ssr: false }
  )

// import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

const handleImage = () => {


    console.log('Image hanlder called')
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async function () {
        const file = input.files[0];
        console.log('User trying to upload this:', file);

        const formData = new FormData()
        if (file !== null) {
            formData.append('files', file)
        }

        console.log(formData)

        fetch('https://smartquestionapi.advancity.net/image', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
            },
            body: formData
        }).then(function (response) {
            if (response.ok) {
                return response.json()
            } else {
                return { "error": true,'response':response.status, 'rsponse: ':response.statusText }
            }
        }).then((json) => {
            console.log(json)
            var cursorPosition = this.quill.getSelection();
            var imagePath = "https://smartquestionapi.advancity.net/Images/" + json.imageUrl;
            this.quill.insertEmbed(cursorPosition.index, 'image', imagePath, Quill.sources.USER);
            return json;
        }).catch(err => {
            console.log("error: ", err);
        })


    }.bind(this)
}

const quillModules = {
    toolbar: {
        container: [ 
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline','strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}], 
            ['link', 'image'], 
            ['clean']
        ],
        handlers:{
            image: handleImage
        }
    }
    /* ... other modules */
}

const quillFormats = [ 
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'color',
]



const MyEditor = ({value,setDesc, theme, height}) => {

    // const[text, setText] = useState('')

    // const handlTextChange = (value) => {
    //     // console.log('Value is: ', value)
    //     setText(value)
    //     setDesc(text)
    // }

    return (
        <ReactQuill 
            // height={300}
            style={{ minHeight:'300px', maxHeight:'300px' }}
            theme={theme||'snow'}
            modules={quillModules}
            formats={quillFormats}
            value={value}
            placeholder="Write a blog"
            onChange={(html) => setDesc(html)} 
        />
    );
}

export default MyEditor;
