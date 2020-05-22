var doc = new jsPDF();
var elementHandler = {
    '#ignorePDF': function (element, renderer) {
        return true;
    }
};

var page1 = window.document.getElementById("page-1");
var page2 = window.document.getElementById("page-2");


doc.addPage(doc.fromHTML(
    page1,
    15,
    15,
    {
        'width': 180, 'elementHandlers': elementHandler
    }));

doc.addPage(doc.fromHTML(
    page2,
    15,
    15,
    {
        'width': 180, 'elementHandlers': elementHandler
    }));

doc.save('creditAnalisis.pdf');