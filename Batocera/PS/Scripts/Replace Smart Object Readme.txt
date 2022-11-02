Install to the default script folder. (i.e. C:\Program Files\Adobe\Adobe Photoshop 2022\Presets\Scripts) It doesn't work in the appdata/roaming folders.

With a smart object selected (other wise it will throw an error. My script templates are saved with the smart object selected.) run the script 

at File>scripts>Replace Smart Object. (I bind the script to F12)

A file browser window will open. (If you have ran the script before it will remeber the folder, make sure you browse toa new one if needed.)

Select your target files. (It will only see PNGs and TIFs, although you could edit the script and add JPGs.)

Press OK and it will replace the smart object with your files one by one, ovewriting the files. (Save a backup just in case.)

For future reference the target files and the smart object contents must be exactly the same size and bit depth or it will doo strange things. If you ever do any cropping on the smart object (Especially if the cropping is off cenetr I suggest you place some center guides before hand. Or it may also do strange things.)

In the samples folder I have some templates that I regularly use with the script.

It doesn't matter wher the smart object is in the composition... it can be part of a masked group etc.

If you have a copy of the smart object it will also be replaced. (e.g. if you have flipped and rotated something with a transparency mask for a reflection.)