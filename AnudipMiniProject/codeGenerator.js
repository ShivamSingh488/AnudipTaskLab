let url = null
        let click = 0;
        let resettClick=0;
        let resetButton=document.createElement("button");
        let downloadQRCode = document.createElement("a");
        resetButton.className="resetButton";
        
        function QRCodeGenerator() {
            click++;
            resettClick++;
           

            let inputValues = document.querySelector("#inputValue").value;
            if (!inputValues.trim()) {
    alert("Please enter some text or URL");
    return;
}
            
            QRCode.toDataURL(inputValues, { width:1, margin: 1 }, (err, url2) => {
                if (err) throw err
                url = url2;
                document.body.querySelector(".QR-image").style.display="block";
                document.body.querySelector(".QR-image").src = url;
                downloadQRCode.style.display="block";
                if (click < 2) {
                    downloadQRCodeFun();
                }
                resetButton.innerHTML="Reset/Restart"
                resetButton.addEventListener("click",()=>{
                        resett();
                })
                 resetButton.style.display="block";
                if(resettClick<2){
                document.body.querySelector(".remaining").append(resetButton);
            }
                
                
            })
           
        }
        function resett(){
        document.querySelector("#inputValue").value="";
        document.body.querySelector(".QR-image").style.display="none"
        resettClick=0;
        resetButton.style.display="none";
        downloadQRCode.style.display="none"
        }
        function downloadQRCodeFun() {
            downloadQRCode.innerHTML = "Download QR Code";
            downloadQRCode.href = url;
            downloadQRCode.className="download"
            downloadQRCode.download = "qrcode.png";
            let  remaining = document.body.querySelector(".remaining");
            remaining.append(downloadQRCode)
            

        }
        