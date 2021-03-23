import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios'

const TynnyMCE = ({setDesc}) => {


    const initImageUpload = (editor) => {
        var inp = $(`<input id='tinymce-uploader' type='file' name='pic' accept='image/*' style='display:none' multiple>`);
        $(editor.getElement()).parent().append(inp);

        editor.ui.registry.addToggleButton('imageupload', {
          text:'',
          icon:'image',
          onAction: function(_) { 
            inp.trigger('click');
          }
        });
        inp.on('change', async () => {
            // for(let i=0; i < inp[0].files.length; i++){
                let file = inp[0].files[0];
                console.log('File is: ', inp)
                let data = new FormData();
                data.append('file',file);
                data.append('upload_preset', 'leaverage');

                const response = await axios.post('https://api.Cloudinary.com/v1_1/dgzzionee/image/upload', 
                data, { headers: {'Content-Type': 'multipart/form-data'}} )
                 
                // const upload = await response.json();
                console.log(response.data)

                if (response.status = 200) { 
                    editor.insertContent('<img style="width:50%; margin:5px" class="content-img" src="' + response.data.url + '"/>');
                    // clear data to avoid uploading same data not working in the second time
                    inp.val('');
                }

            // }
        })
    }
        


    return (
        <Editor
            apiKey='n07kqhwmimi936tsx8nh222m7jrwbweyy7yowcwx8gjtmyol'
            // initialValue="<p>This is the initial content of the editor</p>"
            placeHolder="Write awesome blog"
            init={{
                height : "350",
                placeholder: "Start writing an amazing article...",
                menubar: false,
                content_style: "div, p { font-size: 15px; }",
                // fixed_toolbar_container: '#mytoolbar',
                skin:'snow',
                // inline: true,
                // toolbar_location: "bottom",
                plugins: [
                    'advlist autolink link image lists charmap print preview hr anchor pagebreak',
                    'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
                    'table emoticons template paste help'
                  ],

                toolbar: 'undo redo | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist |link imageupload media| forecolor emoticons | styleselect  | fontsizeselect  table | pagebreak print | preview   fullscreen',
                
                fontsize_formats:
                "8pt 9pt 10pt 11pt 12pt 14pt 16pt 18pt 24pt 30pt 36pt 48pt 60pt 72pt 96pt",
                setup: function(editor) {
                    initImageUpload(editor);

                    editor.on('init', function(ed) {
                        this.getBody().style.fontSize = '14px';
                    });
                },
                content_style: 'body { font-size:14px }'
            }}


            onEditorChange={(content)=>setDesc(content)}
        />
    );
}

export default TynnyMCE;
