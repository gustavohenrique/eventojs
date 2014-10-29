EventoJS
========

Evento is a simple and easy library to works with javascript events.  
You can add a custom events or the DOM events like click, mouseover, etc.

## Installation

    bower install eventojs

Or just add the `evento.js` in the HTML file.

    <script src="evento.js"></script>

## Usage

Just use `Evento.applyTo` for simple objects or `Evento.applyToHtml` for DOM elements.

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

Binds a function on event

### trigger

Runs the function added by `bind`

### show

Removes the `hide` class

### hide

Adds the `hide` class that contains `display:none`

### addClass

Adds a css class

### removeClass

Removes a css class

## License

MIT
