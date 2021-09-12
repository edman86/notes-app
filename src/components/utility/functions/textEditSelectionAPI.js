export function editText(editedText, normalText) {

    // editedText => classes(.font-weight-bold, .font-style-italic etc)
    // normalText => classes(.font-weight-normal, .font-style-italic etc)

    let sel, range, selectedNode, selectedText, newNode;

    if (document.getSelection) {

        sel = document.getSelection();

        if (sel.rangeCount) {
            range = sel.getRangeAt(0);

            selectedNode = sel.anchorNode;
            selectedText = sel.toString();

            if (selectedNode.parentElement.classList.contains(editedText)
                && selectedNode.parentElement.nodeName === 'SPAN') {

                newNode = document.createElement('span');
                newNode.classList.add(normalText);
            
            } else {

                newNode = document.createElement('span');
                newNode.classList.add(editedText);
            }

            range.deleteContents();

            newNode.textContent = selectedText;
            range.insertNode(newNode);

            range.collapse();
            range.detach();
        }

        sel.removeAllRanges();
    }
    
}