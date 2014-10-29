EventoJS
========

Evento is a simple and easy library to works with javascript's events.  
You can add a custom events or the common DOM events.

## Installation

    bower install eventojs

Or just add the `evento.js` on the HTML file.

    <script src="evento.js"></script>

## Usage

Just call `Evento.applyTo` for simple objects or `Evento.applyToHtml` for DOM elements.

### Simple objects

    var person = {
        name: Gustavo
    };
    Evento.applyTo(person);
    person.bind('say', function (message) {
        console.log(message);
    });
    person.trigger('say', 'hello!');

### DOM elements

    var button = document.querySelector('#myButton');
    Evento.applyTo(button);
    button.bind('click', function () {
        console.log('Hello!!!');
    });
    button.trigger('click');

## API

### bind

Atach an event.

### trigger

Run the function added by `bind`

### show

Removes the `hide`

### hide

Add the `hide` class contains `display:none`

### addClass

### removeClass

## License

MIT
