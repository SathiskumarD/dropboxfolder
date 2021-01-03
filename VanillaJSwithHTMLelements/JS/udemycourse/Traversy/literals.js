const name = "John";
const age = 31;
const job = "Web Developer";
const city = "Miami";
let html;

//with out Template strings(es%)

//html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job : ' + job + '</li><li> City :' + city + '</li><ul>';
/* html2 = '<ul>' +
    '<li>Name: ' + name + '</li>' +
    '<li>Age: ' + age + '</li>' +
    '<li>Job: ' + job + '</li>' +
    '<li>city: ' + city + '</li>' + '</ul>'; */
//document.body.innerHTML = html;
// document.body.innerHTML = html2;

//With template Strings(es6)
html = `
<ul>
<li>Name: ${name}</li>
<li>Age: ${age}</li>
<li>Job: ${job}</li>
<li>City: ${city}</li>
<li> ${2+2}</li>
<li> ${hello()}</li>
<li>${age>30?'over 30' :'under 30'}</li>
</ul>`;

function hello() {
    return 'hello';
}
document.body.innerHTML = html;