import React from 'react';
import ProfilePopover from './ProfilePopover.jsx';

export default function Profile() {
  const tempUser = 'organicrabbit525';
  return (
    <div>
      <ProfilePopover user={tempUser} />
    </div>
  );
}
