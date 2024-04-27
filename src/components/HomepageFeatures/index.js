import clsx from 'clsx';
import Heading from '@theme/Heading';

const FeatureList = [
  {
    title: 'Easy to Understand',
    description: (
      <>
        Don't worry, our documentation is written in a way that everyone should understand.
      </>
    ),
  },
  {
    title: 'Fast Reads',
    description: (
      <>
        We will make sure you can read and follow our documentation fast and easy!
      </>
    ),
  },
  {
    title: 'Thanks',
    description: (
      <>
        Thanks to Docusaurus, our documentation is smooth and simple to navigate around.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* No SVG needed */}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3" style={{ fontSize: '2rem', marginBottom: '1rem' }}>{title}</Heading>
        <p style={{ fontSize: '1.4rem' }}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section style={{ padding: '3rem 0' }}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
