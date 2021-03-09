### image resize script

Just a quick script for resizing images using sharp  
Currently, it resizes based on height  
provide filename as one argument: it creates 4 images at heights 75, 150, 320, and 768 pixels  
provide filename as one argument, and an integer as another: it creates the image resized at that specific height  

examples:
```
node index.js myimage.jpg
```
returns 4 files
```
myimage@75.jpg
myimage@150.jpg
myimage@320.jpg
myimage@768.jpg
```
Or, if you type 
```
node index.js myimage.jpg 200
```
returns 1 file
```
myimage@200.jpg
```