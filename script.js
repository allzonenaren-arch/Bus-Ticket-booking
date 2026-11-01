document.getElementById("busForm").addEventListener("submit", function(e){

    e.preventDefault();

    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;

    document.getElementById("result").innerHTML = `
        <div class="bus-card">
            <h3>Express Travels</h3>
            <p>${from} ➜ ${to}</p>
            <p>Departure: 08:00 AM</p>
            <p>Price: ₹650</p>
            <button onclick="bookTicket()">Book Now</button>
        </div>

        <div class="bus-card">
            <h3>Super Deluxe</h3>
            <p>${from} ➜ ${to}</p>
            <p>Departure: 10:00 AM</p>
            <p>Price: ₹750</p>
            <button onclick="bookTicket()">Book Now</button>
        </div>
    `;
});

function bookTicket(){
    alert("Ticket Booked Successfully!");
}