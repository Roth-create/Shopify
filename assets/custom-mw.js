document.addEventListener("DOMContentLoaded", () => {

    const textToCopyContainer = document.getElementById("textToCopy");
    const copyButton = document.getElementById("copyBtn");

    const popup = document.getElementById("custom_popup");
    const closePopupButton = document.getElementById("custom_close-popup")


    copyButton.addEventListener("click", () => {
        const boldTextToCopy = textToCopyContainer.querySelectorAll("strong, b");
        const tempTextarea = document.createElement("textarea");
        let combinedText = "";

        boldTextToCopy.forEach((element) => {
            combinedText += element.textContent + "\n";
        });

        tempTextarea.value = combinedText;
        document.body.appendChild(tempTextarea);
        tempTextarea.select();
        document.execCommand("copy");
        document.body.removeChild(tempTextarea);
        // alert(`Bold text inside "textToCopy" id copied to clipboard:\n${combinedText}`);

        // console.log('code copied')
        // Display the custom-styled popup
        popup.style.display = "flex";
    });

    function CloseBtn(){
        popup.style.display = "none";
    };

    closePopupButton.addEventListener("click", function (event) {
        event.stopPropagation(); 
        CloseBtn();
    });
      
    popup.addEventListener("click", function (event) {
    if (event.target === popup) {
        CloseBtn();
    }
    });

});
