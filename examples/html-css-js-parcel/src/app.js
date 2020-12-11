import icons from '@onfido/castor-icons/svg/icons.svg';
import './app.css';

const button = 'ods-button -action';

export const App = () => `
  <div class="grid">
    <button class="${button}--primary">Primary</button>
    <button class="${button}--secondary">Secondary</button>
    <button class="${button}--tertiary">Tertiary</button>
    <button class="${button}--primary" style="background: crimson;">
      Crimson
    </button>
    <button class="${button}--primary raised">Raised</button>
    <button class="${button}--primary round">Round</button>
    <button class="${button}--primary">
      <svg fill="currentColor" focusable="false" height="24" width="24">
        <use href="${icons}#passport"></use>
      </svg>
      Icon sprite
    </button>
    <button class="${button}--primary">
      <i class="icon passport"></i>
      Individual icon
    </button>
  </div>
`;
