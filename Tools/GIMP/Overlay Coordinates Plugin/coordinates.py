#!/usr/bin/env python
from gimpfu import *

def selectionMargins(image):
    selection,x1,y1,x2,y2=pdb.gimp_selection_bounds(image)
    if not selection:
        pdb.gimp_message("No selection")
    else:
        gimp.message('X_Position=%d\nY_Position=%d\nWidth=%d\nHeight=%d' % (x1,y1,(image.width-(image.width-x2))-x1,(image.height-(image.height-y2))-y1))

### Registration
desc='Show Overlay Coordinates'
register(
    'selection-margins',desc,desc,'','','2019',desc,'*',
    [(PF_IMAGE, "image", "Input image", None),],[],
    selectionMargins,menu="<Image>/Select"
)

main()