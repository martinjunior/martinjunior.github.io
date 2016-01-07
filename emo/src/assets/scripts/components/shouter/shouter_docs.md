Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque labore repudiandae, aliquid mollitia! Perspiciatis earum error, doloremque, architecto possimus vel culpa voluptatibus porro neque nostrum. Asperiores sed magnam nisi! Dicta consequatur iusto quis non alias numquam officiis blanditiis accusamus nemo facilis assumenda id inventore omnis similique, veniam ipsam totam repellat consequuntur fugiat perspiciatis labore, neque iure quos! Iste, veniam, similique.

<button
    type="button"
    class="btn"
    data-component="Shouter"
    data-shout="Hello World!">Shouter!</button>

------------------------------------------------------------------

## Shouter API

### Methods

#### Shouter.instantiate

Instantiate all the shouters on the page. Shouter elements are expected to use the `[data-component="Shouter"]` attribute/value combination.

```javascript
Shouter.instantiate();
```

#### Shouter.shout

Shout the provided message

```javascript
Shouter.shout('Hello World!');
```