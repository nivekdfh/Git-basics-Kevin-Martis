

var ctx = document.getElementById('chart1').getContext('2d');
	var myBarChart = new Chart(ctx, {
	    type: 'bar',
	    data: {
	    	labels: ["brandstof", "snelheid", "acceleratie", "g-force", "temperatuur"],
	    	datasets: [{
	        	label: "Voertuig informatie",
	        	backgroundColor:'rgb(222, 182, 224)',
	        	borderColor:  'rgb(227, 228, 219)',
	        	data: [95, 90, 50, 80, 5],
	        }]
	},
});

var ctx  = document.getElementById('chart2').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart
    type: 'line',
    // The dataset
    data: {
       labels: ["Monday", "Tuesday", "Wednesday", "Tuesday", "Friday", "Saturday", "Sunday"],
        datasets: [{
            label: "Voertuig omgeving",
            backgroundColor: 'rgb(31,62,88)',
           	borderColor:  'rgb(227, 228, 219)',
            data: [2500, 2250, 2800, 2000, 2600, 2400, 2500],
        }]
    },

// Configuration options go here
    options: {
    	plugins: {
    		legend: {
    			labels: {
    				color: "#fff",
    			}
    		}
    	}
    }
});


var ctx = document.getElementById('chart3').getContext('2d');
	var myPieChart = new Chart(ctx,{
// The type of chart
	    type: 'pie',
// The dataset
	    data: {
	        labels: ["Brood", "Ramon noodle", "Booterham", "Chips", "Water"],
	        datasets: [{
	            label: "Voorraden",
	            backgroundColor: ['rgb(19, 95, 21)','rgb(76, 59, 77)','rgb(76, 69, 47)','rgb(87, 56, 68)' ,'rgb(84, 83, 19)'],
	            borderColor:  'rgb(227, 228, 219)',
	            data: [65, 53, 89, 74, 260],
	        }]
    	},
// Configuration options go here
	    options: {
	    	plugins: { 
	    		legend: {
	    			labels: {
	    				color: "#fff",
	    			},
	    			position: 'bottom'
	    		},
	    	}
	    }	

});

var ctx  = document.getElementById('chart4').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart
    type: 'doughnut',
    // The dataset
    data: {
       labels: ["Zwaartekracht omzetten", "Mars naar Aardse afstand omzetten", "Mars naar Aardse afstand jupiter"],
        datasets: [{
            label: "Tool",
            backgroundColor: ['rgb(31,62,88)','rgb(87, 56, 68)' ,'rgb(84, 83, 19)'],
           	borderColor:  'rgb(227, 228, 219)',
            data: [24500, 225430, 280056],
        }]
    },

// Configuration options go here
  	    options: {
	    	plugins: { 
	    		legend: {
	    			labels: {
	    				color: "#fff",
	    			},
	    			position: 'bottom'
	    		},
	    	}
	    }	

});


