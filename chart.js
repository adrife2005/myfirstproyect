// Chart.js

const ctx = document.getElementById('myChart');

// Global Options
Chart.defaults.font.size = 14;
Chart.defaults.font.family = 'Lato';
Chart.defaults.color = '#ffffff ';



new Chart(ctx, {
  type: 'bar', // bar, horizontalBar, pie, line, doughnut, rada, polarArea
  data: {
    labels: ['HTML', 'CSS', 'Boostrap', 'JavaScript', 'JQuery', 'AJAX'],
    datasets: [{
      label: 'Skills',
      data: [
        91,
        45,
        50,
        20,
        20,
        10
      ],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(255, 205, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(153, 102, 255, 0.6)',
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

  }
});
