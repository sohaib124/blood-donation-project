function checkBloodGroup() {
    let bloodGroup = document.getElementById("blood group").value;

    if (bloodGroup === "O-") {
        document.getElementById("message").innerHTML = "Your blood donors are O-";
    } else if(bloodGroup === "O+") {
        document.getElementById("message").innerHTML = "Your blood donors are O- and o+";
    }
    
    else if(bloodGroup === "A-") {
        document.getElementById("message").innerHTML = "Your blood donors are O- and A-";
    }

    else if(bloodGroup === "A+") {
        document.getElementById("message").innerHTML = "Your blood donors are O- , O+, A- and A+";
    }
    else if(bloodGroup === "B-") {
        document.getElementById("message").innerHTML = "Your blood donors are O- , A- and B"
    }
    else if(bloodGroup === "B+") {
        document.getElementById("message").innerHTML = "Your blood donors are O- , A- , B"
    }
    else if(bloodGroup === "AB-") {
        document.getElementById("message").innerHTML = "Your blood donors are O- , A- , B"
    }
    else if(bloodGroup === "AB+") {
        document.getElementById("message").innerHTML = "Your blood donors are O- , A- , B"
    }
}