const message = document.querySelector(".message");
    function generateQR(){
        const link = document.getElementById("link").value;
        const qr = document.getElementById("qrcode");
        const download = document.getElementById("download");

            if (!link && link === ""){
                message.textContent = "Please Enter a Valid Link";
            }
            qr.innerHTML="";
            qr.classList="show";

            new QRCode(qr, link);
            download.style.display= "block" ;
            download.style.padding="10px";
            download.style.marginLeft="50px";
        }

        function downloadQR(){
            const img = document.querySelector("#qrcode img");
            const link =document.createElement("a");
            link.href = img.src;
            link.download = "qrcode.png";
            link.click();
        }
    