import tickIcon from '../assets/images/tick-icon.png';

let CBOHelpers: {
    toast: (title: string, timeout?: number) => void;
    setStorage: (key: string, value: string) => void;
    removeStorage: (key: string) => void;
    getStorage: (key: string) => string;
} = {
    toast: function(title, timeout = 2000) {
        let markup = `
            <div class="cbo-toast">
                <img class="cbo-toast-icon" src="${tickIcon}" alt="Tick Icon"/>
    
                <div class="cbo-toast-data">
                    <h3 class="cbo-toast-title">${title}</h3>
                    <span class="cbo-toast-time-text">A SECOND AGO</span>
                </div>
            </div>
        `
    
        if(!document.querySelector('.cbo-toast')) {
            document.body.insertAdjacentHTML('beforeend', markup);
        }

        setTimeout(() => {
            document.querySelector('.cbo-toast')?.classList.add('active');
        }, 0);

        setTimeout(() => {
            document.querySelector('.cbo-toast')?.classList.remove('active');
        }, timeout);
    },

    setStorage(key, value) {
        localStorage.setItem(key, value);
    },
    
    getStorage(key) {
        return localStorage.getItem(key) || '';
    },

    removeStorage(key) {
        localStorage.removeItem(key);
    },
};

export default CBOHelpers;