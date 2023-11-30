const head = React.createElement(
  'h1',
  { id: 'heading' },
  'hello world from react'
);
/**
 * <div id = "parent"
 */
const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: ' child' }, [
    React.createElement('h1', {}, 'hello guys'),
    React.createElement('h1', {}, 'hello guys'),
  ]),
  React.createElement('div', { id: ' child' }, [
    React.createElement('h1', {}, 'hello guys'),
    React.createElement('h1', {}, 'hello guys'),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
