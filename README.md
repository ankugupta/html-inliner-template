# html-inliner-template
Template for creating single-file-contains-all html/css/js projects 

Steps to use:
1) install Node from https://nodejs.org/en/  (LTS version)
2) checkout/download code into a local directory
3) open CMD in the directory from step2
4) check node and npm are installed properly by running following commands: <br>
    <b>node --version</b><br>
    <b>npm --version</b>
5) if both above commands run OK, then run <b>npm install</b>. It will take some time to complete.
6) setup your code: 
   - src
      - html (keep your html file here - use 'inline' attribute in your 'script', 'link' and 'img' tags)
      - assets
        - css (keep your css files here)
        - js (keep your js files here)
        - images (keep your images here)

7) after your code is ready to be built, run <b>npm run build</b>. This will generate an html file in <i>build/out</i>.

Test the file by opening it in the browser of your choice! Enjoy!
