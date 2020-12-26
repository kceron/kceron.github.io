import React from 'react';

function TopNav({ title, onMenuClick = () => {} }) {
  return (
    <div id="headerToggle">
      <a
        href="/#"
        className="toggle"
        onClick={e => {
          e.preventDefault();
          onMenuClick();
        }}
      >
        {' '}
      </a>
    </div>
  );
}

export default TopNav;