//create variables to hold the cashier scores
let cashier = 0
let c_tot = 0
let c_num = 0

//create variables to hold the overall scores
let overall = 0
let o_tot = 0
let o_num = 0

//cashier button 1
cashierScoreBtn1 = document.getElementById("cashier-1")
cashierScoreBtn1.addEventListener("click", function() {
	c_tot = c_tot + 1 //adding 1 to score
	c_num = c_num + 1
	cashier = c_tot / c_num
    console.log(cashier)
    document.getElementById('cashierScore').textContent = cashier
})

//cashier button 2
cashierScoreBtn2 = document.getElementById("cashier-2")
cashierScoreBtn2.addEventListener("click", function() {
	c_tot = c_tot + 2 //adding 2 to score
	c_num = c_num + 1
	cashier = c_tot / c_num
    console.log(cashier)
    document.getElementById('cashierScore').textContent = cashier
	
})

//cashier button 3
cashierScoreBtn3 = document.getElementById("cashier-3")
cashierScoreBtn3.addEventListener("click", function() {
	c_tot = c_tot + 1 //adding 1 to score
	c_num = c_num + 1
	cashier = c_tot / c_num
	console.log(cashier)
    document.getElementById('cashierScore').textContent = cashier
})

//cashier button 4
cashierScoreBtn4 = document.getElementById("cashier-4")
cashierScoreBtn4.addEventListener("click", function() {
	c_tot = c_tot + 2 //adding 2 to score
	c_num = c_num + 1
	cashier = c_tot / c_num
	console.log(cashier)
    document.getElementById('cashierScore').textContent = cashier
})

//overall button 1
overallScoreBtn1 = document.getElementById("overall-1")
overallScoreBtn1.addEventListener("click", function() {
	o_tot = o_tot + 1 //adding 1 to score
	o_num = o_num + 1
	overall = o_tot / o_num
	console.log(overall)
    document.getElementById('overallScore').textContent = overall
})

//overall button 2
overallScoreBtn2 = document.getElementById("overall-2")
overallScoreBtn2.addEventListener("click", function() {
	o_tot = o_tot + 2 //adding 2 to score
	o_num = o_num + 1
	overall = o_tot / o_num
	console.log(overall)
    document.getElementById('overallScore').textContent = overall
})

//overall button 3
overallScoreBtn3 = document.getElementById("overall-3")
overallScoreBtn3.addEventListener("click", function() {
	o_tot = o_tot + 1 //adding 1 to score
	o_num = o_num + 1
	overall = o_tot / o_num
	console.log(overall)
    document.getElementById('overallScore').textContent = overall
})

//overall button 4
overallScoreBtn4 = document.getElementById("overall-4")
overallScoreBtn4.addEventListener("click", function() {
	o_tot = o_tot + 2 //adding 2 to score
	o_num = o_num + 1
	overall = o_tot / o_num
	console.log(overall)
    document.getElementById('overallScore').textContent = overall
})

let ratingButton = document.getElementById('show-hide')
let switchDisplays = document.getElementById('show-score')

ratingButton.addEventListener('click', function() {

    if (switchDisplays.style.display === "none") {
        ratingButton.textContent = "Hide Rating"
        switchDisplays.style.display = "block"
    } else {
        ratingButton.textContent = "Display Rating"
        switchDisplays.style.display = "none"
    }

})

