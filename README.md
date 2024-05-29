
# PopupManager - JavaScript module for managing popups

## Overview
This module allows you to create and manage popups with ease. It has various built-in functions such as open, close, submit, and more, which covers all the common needs you may face when working with a popup in a web project.
The given id parameter represents the HTML element's ID you want to apply the popup action to.
The PopupManager object serves as a namespace for a collection of functions related to handling popups.

## Installation
Just include the PopupManager object in your JavaScript file.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    ...
    <!-- import the file -->
    <script src="popup.js"></script>
    <!-- or via jsdelivr -->
    <script src="https://cdn.jsdelivr.net/gh/princessmiku/PopupManager@1.0.0/popup.js"></script>
    ...
</head>
<body>
    ...
</body>
</html>

```

## Usage
Firstly, make sure to assign the class .pm-popup to your HTML element you want to become a popup.

```html
<!-- My Popup -->
<div class="pm-popup">
    ...
</div>
```

### add
Use this function to add a new popup configuration setting:

```js
PopupManager.add(id, open = null, submit = null, close = null)
```

Parameters are:
- id (string): Id of the popup HTML element.
- open (function): Function to be executed when the popup is opened.
- submit (function): Function to be executed when a submit action happens.
- close (function): Function to be executed when the popup is closed.

You can pass the callback function that will be called when:
- The popup is opened.
- The popup is submitted.
- The popup is closed.

exits, remove, open, close, closeAndOpen, submitCloseAndOpen, submit, submitAndClose

The module provides functions to check if popup exists (exits), remove popup setting (remove), 
open popup (open), close popup (close), close current popup and open another one (closeAndOpen), 
submit current popup setting, close it and open another one (submitCloseAndOpen), 
submit popup setting (submit), submit popup setting and close it (submitAndClose).

## Example
In the project, there is an HTML file named `example.html`. 
You can use it to visualize and understand the usage of this module.

### Example html popup
cropped from the `example.html`
```html
<div class="pm-popup" id="example-popup">
        <div class="pm-popup-box">
            <h1>Hello World</h1>
            <div class="button-list">
                <button onclick="PopupManager.submit('example-popup')">Submit</button>
                <button onclick="PopupManager.close('example-popup')">Close</button>
            </div>
        </div>
    </div>
```

**Enjoy using the PopupManager!**