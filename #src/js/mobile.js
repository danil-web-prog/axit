function isMobile() {
    if (window.innerWidth < 1024) {
        document.querySelector('.navbar_box_text_one').style.display = "none";
        document.querySelector(".navbar_box_text_two").style.display = "flex";
    } else {
        document.querySelector('.navbar_box_text_one').style.display = "flex";
        document.querySelector(".navbar_box_text_two").style.display = "none";
    }
};
isMobile()
setInterval(isMobile, 1000)
function open() {
    let a = document.querySelector(".navbar_box_text_two_text").classList.toggle("show");
    // console.log(a.length);
    // for (let i = 0; i <= a.length; i++) {
    //     let b=a[i];
    //     b.classList.toggle("show");
    //
    //
    // };
    console.log("Yes");
};
document.querySelector(".navbar_box_text_two_div").onclick = () => { open() };
tab1()

document.querySelector(".one").onclick = () => {
    tab1();
};
document.querySelector(".two").onclick = () => {
    tab2();
};
document.querySelector(".tree").onclick = () => {
    tab3();
};

function tab1() {
    document.querySelector(".features1_box_two_one").style.display = "flex";
    document.querySelector(".features1_box_two_two").style.display = "none";
    document.querySelector(".features1_box_two_tree").style.display = "none";

    document.querySelector(".one").style.background = "#FF8B38";
    document.querySelector(".two").style.background = "#000";
    document.querySelector(".tree").style.background = "#000";
}
function tab2() {
    document.querySelector(".features1_box_two_one").style.display = "none";
    document.querySelector(".features1_box_two_two").style.display = "flex";
    document.querySelector(".features1_box_two_tree").style.display = "none";

    document.querySelector(".one").style.background = "#000";
    document.querySelector(".two").style.background = "#FF8B38";
    document.querySelector(".tree").style.background = "#000";
};
function tab3() {
    document.querySelector(".features1_box_two_one").style.display = "none";
    document.querySelector(".features1_box_two_two").style.display = "none";
    document.querySelector(".features1_box_two_tree").style.display = "flex";

    document.querySelector(".one").style.background = "#000";
    document.querySelector(".two").style.background = "#000";
    document.querySelector(".tree").style.background = "#FF8B38";
}



let a = 1;
setInterval(plus, 5000);

function plus() {
    if (a === 1) {
        tab1();
        a++;
    } else if (a === 2) {
        tab2();
        a++;
    } else if (a === 3) {
        tab3();
        a++;
        if (a > 3) {
            a = 1;
        } else {
            console.log("No error");
        }
    } else {
        console.log("No error");
    }

    console.log(a);
}
