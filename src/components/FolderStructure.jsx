import React from 'react';
import { useState } from 'react';
import './FolderStructure.css';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Languages from './Languages';
import Interests from './Interests';
import References from './References';
import DownloadCV from './DownloadCV';
import Todo from './Todo';
import Education from '../pages/Education';
import Experience from '../pages/Experience';
import Internship from '../pages/Internship';
import AppInfo from '../pages/App';
import Readme from '../pages/Readme';
import PackageJson from '../pages/PackageJson';
import ContactConfig from '../pages/ContactConfig';
import IndexHtml from '../pages/IndexHtml';
import Projects from '../pages/Projects';

import '../App.css';
const name2 = import.meta.env.VITE_NAMN2;

const structure = [
  {
    name: name2,
    icon: '🗂️',
    children: [
      {
        name: 'public',
        icon: '📁',
        children: [
          { name: 'index.html', icon: '📄', component: IndexHtml },
          { name: 'Download-CV.pdf', icon: '📥', component: DownloadCV },
        ],
      },
      {
        name: 'src',
        icon: '📁',
        children: [
          {
            name: 'components',
            icon: '📁',
            children: [
              { name: 'AboutMe.jsx', icon: '📄', component: AboutMe },
              { name: 'Skills.jsx', icon: '📄', component: Skills },
              { name: 'Languages.jsx', icon: '📄', component: Languages },
              { name: 'Interests.jsx', icon: '📄', component: Interests },
              { name: 'References.jsx', icon: '📄', component: References },
            ],
          },
          {
            name: 'pages',
            icon: '📁',
            children: [
              { name: 'Education.jsx', icon: '📄', component: Education },
              { name: 'Experience.jsx', icon: '📄', component: Experience },
              { name: 'Internship.jsx', icon: '📄', component: Internship },
              { name: 'Projects.jsx', icon: '📄', component: Projects },
              { name: 'App.jsx', icon: '📄', component: AppInfo },
            ],
          },
        ],
      },
      { name: 'README.md', icon: '📄', component: Readme },
      { name: 'package.json', icon: '📄', component: PackageJson },
      { name: 'contact.config.js', icon: '📄', component: ContactConfig },
    ],
  },
  {
    name: 'process',
    icon: '📁',
    children: [{ name: 'TODO.md', icon: '📄', component: Todo }],
  },
];

function Tree({ name, icon, component, children }) {
  const [open, setOpen] = useState(false);
  const isFolder = Array.isArray(children);

  return (
    <div className='tree-indent'>
      <div
        role='button'
        className={isFolder ? 'folder' : 'file'}
        onClick={() => setOpen(!open)}
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setOpen(!open)}
      >
        <span role='img' aria-label={isFolder ? 'mapp' : 'fil'}>
          {isFolder ? (open ? '📂' : '📁') : icon}
        </span>{' '}
        {name}
      </div>

      {open &&
        isFolder &&
        children.map((child, index) => <Tree key={index} {...child} />)}

      {open && component && (
        <div className='accordion-content'>
          {React.createElement(component)}
        </div>
      )}
    </div>
  );
}

export default function FolderStructure() {
  return (
    <main className='folder-structure full'>
      <h1 className='app-title'>
        <span className='emoji'>🗂️</span> CV i mappstruktur
      </h1>
      {structure.map((item, index) => (
        <Tree key={index} {...item} />
      ))}
    </main>
  );
}
