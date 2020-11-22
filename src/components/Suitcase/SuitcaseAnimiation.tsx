import React from 'react';
import { ImageMapper, ImageMapperProps } from 'react-image-mapper2';

var URL = "https://uc0b9469c9906f0abae862af9262.previews.dropboxusercontent.com/p/thumb/AA-hrrpSYB2lhSdcyXyVap7mS36duS-UjzeZT9_zskemHb_nWz2utrZFnFpl-Zm7fAxOC1htHcGy3vsxZFamlVMxZppXAeAF8P9VR-XVAuetOGqBf85H3O9M5ap2WQGDkqUOS8OQU5VQMIx1WQZ-tgwhcJk5dWiJkQwGs8779DSObWWBsxZO02HtO9ngSj2gcVS-r8fhNvWv8-YMOfF3vYbDQh4DlgMLjWwrld3tzMMlF-gGpMwFW1K6QHBhqZR1VvpeeJjQ9BOWgMIfZB-rFIPXSnWVtfD_f1MUB-qBRiEVnCqobKa6QgrjGSnuq6pcgD7-kGy7_JadQp_T9RD9wa3d4bQYhEFswnZOD74bP7KEcOPjgENPq3ptgjWslxPobuQ/p.png?fv_content=true&size_mode=5";

var MAP = {
    name: "suitcase", 
    areas: {
        name: "fetus. HELP.", 
        shape: "circle", 
        coords: [25, 33, 27, 300, 128, 240, 128, 94],
		preFillColor: "green",
    }
}

const SuitcaseAnimation = () => {
    return (
        <div>
            <ImageMapper
                active
                src={URL}
                width={500}
                map={{name: 'my-map',
                areas: [
                  { shape: 'poly', coords: [25,33,27,300,128,240,128,94], preFillColor: "green" },
                  { shape: 'poly', coords: [219,118,220,210,283,210,284,119] },
                  { shape: 'poly', coords: [381,241,383,94,462,53,457,282] },
                  { shape: 'poly', coords: [245,285,290,285,274,239,249,238] },
                ]}}
			 />
        </div>
    )
}

export default SuitcaseAnimation; 
