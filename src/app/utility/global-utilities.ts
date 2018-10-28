import {Injectable} from '@angular/core';

@Injectable()
export class GlobalUtilities {

    BASEURL = 'http://wadokya.com/';

    public hideShowLoader(action) {
        let loadingId = document.getElementById('loading');
        if(action) {
            loadingId.style.display = 'block';
        } else {
            loadingId.style.display = 'none';
        }
    }

}