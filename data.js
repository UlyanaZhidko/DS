// The HTML table.
var mrotMonth = document.querySelector('.mrotMonth');
var mrotDynamics = document.querySelector('.mrotDynamics');


// data.
var mrotMonthData = [
    { card: 'demo', count: '01748329', amount: '1234', block: 'N', abs: 'Something' },
    { card: 'test', count: '12345789', amount: '4321', block: 'Y', abs: 'Something Else' }
];

var mrotDynamicsData = [
    { card: '1111', count: '01748329', amount: '1234', block: 'N', abs: 'Something' },
    { card: '2222', count: '12345789', amount: '4321', block: 'Y', abs: 'Something Else' },
    { card: '3333', count: '12345789', amount: '4321', block: 'Y', abs: 'Something Else' },
    { card: '4444', count: '12345789', amount: '4321', block: 'Y', abs: 'Something Else' }
];

// A function to produce a HTML table row as a string.
function template(d) {
    return '<tr>' +
        '<td>' +
        d.card +
        '</td>' +
        '<td>' +
        d.count +
        '</td>' +
        '<td>' +
        d.amount +
        '</td>' +
        '<td>' +
        d.block +
        '</td>' +
        '<td>' +
        d.abs +
        '</td>' +
        '</tr>';
};

function render(mrotMonth) {
    return function(d) {
        return mrotMonth.innerHTML += d.map(function(i) {
            return template(i);
        }).join('');
    };
};

// Fire the render function. 
render(mrotMonth)(mrotMonthData);
render(mrotDynamics)(mrotDynamicsData);