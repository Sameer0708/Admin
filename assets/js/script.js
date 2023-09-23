$(document).ready(function() {
    // start: Sidebar
    $('.sidebar-dropdown-menu').slideUp('fast')

    $('.sidebar-menu-item.has-dropdown > a, .sidebar-dropdown-menu-item.has-dropdown > a').click(function(e) {
        e.preventDefault()

        if(!($(this).parent().hasClass('focused'))) {
            $(this).parent().parent().find('.sidebar-dropdown-menu').slideUp('fast')
            $(this).parent().parent().find('.has-dropdown').removeClass('focused')
        }

        $(this).next().slideToggle('fast')
        $(this).parent().toggleClass('focused')
    })

    $('.sidebar-toggle').click(function() {
        $('.sidebar').toggleClass('collapsed')

        $('.sidebar.collapsed').mouseleave(function() {
            $('.sidebar-dropdown-menu').slideUp('fast')
            $('.sidebar-menu-item.has-dropdown, .sidebar-dropdown-menu-item.has-dropdown').removeClass('focused')
        })
    })

    $('.sidebar-overlay').click(function() {
        $('.sidebar').addClass('collapsed')

        $('.sidebar-dropdown-menu').slideUp('fast')
        $('.sidebar-menu-item.has-dropdown, .sidebar-dropdown-menu-item.has-dropdown').removeClass('focused')
    })

    if(window.innerWidth < 768) {
        $('.sidebar').addClass('collapsed')
    }
    // end: Sidebar



    // start: Charts
    const labels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    //These barchar is for examcell dashboard
    const salesChart = new Chart($('#sales-chart'), {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                backgroundColor: '#6610f2',
                data: [5, 10, 5, 2, 20, 30, 45, 25 , 15 , 6 , 34 , 52 ],
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    })

    const labels1 = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];

    //This Chart is for Teacher dashboard
    const salesChart1 = new Chart($('#sales-chart1'), {
        type: 'bar',
        data: {
            labels: labels1,
            datasets: [{
                backgroundColor: '#6610f2',
                data: [75, 50, 65, 42, 70, 0 ],
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    })
    //This Piechart is for Examcell Dashboard
    const visitorsChart = new Chart($('#visitors-chart'), {
        type: 'doughnut',
        data: {
            labels: ['Students', 'Teachers', 'Parents'],
            datasets: [{
                backgroundColor: ['#6610f2', '#198754', '#ffc107'],
                data: [80, 60, 30],
            }]
        }
    })
    //This Piechart is for Teacher Dashboard
    const visitorsChart1 = new Chart($('#visitors-chart1'), {
        type: 'doughnut',
        data: {
            labels: ['Boys', 'Girls','Others'],
            datasets: [{
                backgroundColor: ['#6610f2', '#d63384', '#ffc107'],
                data: [80, 60, 5],
            }]
        }
    })
    // end: Charts
})
// function dropdown(){
//     var mylist = document.getElementById("myList");
//     document.getElementById("favourite").value = mylist.options[mylist.selectedIndex].text;
// }