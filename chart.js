// Chart.js

const ctx = document.getElementById('myChart');

// Global Options

Chart.defaults.font.size = 14;
Chart.defaults.color = '#ffffff';



new Chart(ctx, {
  type: 'line', // bar, scatter, pie, line, doughnut, rada, polarArea, bubble
  data: {
    labels: ['HTML', 'CSS', 'Boostrap', 'JavaScript', 'JQuery', 'AJAX'],
    datasets: [{
      label: 'Skills',
      data: [
        41,
        20,
        25,
        20,
        20,
        10
      ],
      fill: false,
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 205, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
      ],
      borderWidth:1,
      hoverBorderWidth:3,
      hoverBorderColor: 0,
      hoverBackgroundColor:[
        'rgba(255, 99, 132, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 205, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(153, 102, 255, 1)',
      ]
    }]
  },
  options: {
    animations: {
      tension: {
        duration: 1000,
        easing: 'linear',
        from: 1,
        to: 0,
        loop: true
      }
    },
    scales: {
      y: { // defining min and max so hiding the dataset does not change scale range
        min: 0,
        max: 50
      }
    }
  }
});
