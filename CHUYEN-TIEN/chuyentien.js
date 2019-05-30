function tinhtien() {
    let amount = document.getElementById("amount").value;
    //alert(amount);

    let optionfr = document.getElementById("frcurency").value;
    let optionto = document.getElementById("tocurency").value;
    //alert(options1)
    if(optionfr=='VietNam' && optionto =='DOLA'){
        let r = amount/23000;
        alert(r);
    }
    if(optionfr=='VietNam' && optionto =='USD'){
        let r = amount/20000;
        alert(r);
    }
    if(optionfr=='VietNam' && optionto =='VND'){
        let r = amount;
        alert(r);
    }if(optionfr=='Lao' && optionto =='DOLA'){
        let r = amount/30000;
        alert(r);
    }
    if(optionfr=='Lao' && optionto =='USD'){
        let r = amount/25000;
        alert(r);
    }
    if(optionfr=='Lao' && optionto =='VND'){
        let r = amount/2000;
        alert(r);
    }
    if(optionfr=='CamPuChia' && optionto =='DOLA'){
        let r = amount/20000;
        alert(r);
    }
    if(optionfr=='CamPuChia' && optionto =='USD'){
        let r = amount/15000;
        alert(r);
    }
    if(optionfr=='CamPuChia' && optionto =='VND'){
        let r = amount/2000;
        alert(r);
    }






}