const PopupManager = {

    popup_functions: {
        element: {},

        open: {},

        submit: {},

        close: {}
    },

    add: function (id, open = null, submit = null, close = null) {
        if (this.exits(id)) {
            console.error('Popup with id', id, 'already exists');
            return;
        }

        let popup_element = document.getElementById(id);
        if (!popup_element) {
            console.error('Popup element with id', id, 'does not exist');
            return;
        }
        popup_element.classList.add("pm-popup");
        this.popup_functions.element[id] = popup_element;
        this.popup_functions.open[id] = typeof open === 'function' ? open : function () {
        };
        this.popup_functions.submit[id] = typeof submit === 'function' ? submit : function () {
        };
        this.popup_functions.close[id] = typeof close === 'function' ? close : function () {
        };
    },

    exits: function (id) {
        return this.popup_functions.element.hasOwnProperty(id);
    },

    remove: function (id) {
        delete this.popup_functions.element[id];
        delete this.popup_functions.open[id];
        delete this.popup_functions.submit[id];
        delete this.popup_functions.close[id];
    },

    open: function (id) {
        if (!this.exits(id)) {
            console.error('Popup with id', id, 'does not exist');
            return
        }
        document.getElementById(id).style.display = 'flex';
        this.popup_functions.open[id]()
    },

    close: function (id) {
        if (!this.exits(id)) {
            console.error('Popup with id', id, 'does not exist');
            return
        }
        document.getElementById(id).style.display = 'none';
        this.popup_functions.close[id]()
    },

    closeAndOpen: function (id, new_id) {
        this.close(id)
        this.open(new_id)
    },

    submitCloseAndOpen: function (id, new_id) {
        this.submit(id)
        this.close(id)
        this.open(new_id)
    },

    submit: function (id) {
        if (!this.exits(id)) {
            console.error('Popup with id', id, 'does not exist');
            return
        }
        this.popup_functions.submit[id]()
    },

    submitAndClose: function (id) {
        this.submit(id)
        this.close(id)
    }

}
