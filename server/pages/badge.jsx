/**
 * External dependencies
 */
import React from 'react';

const BranchName = ( { branchName, commitChecksum } ) => (
	<span className={ 'environment branch-name' } title={ 'Commit ' + commitChecksum }>
		{ branchName }
	</span>
);

const DevDocsLink = ( { devDocsUrl, docs } ) => (
  <span className="environment is-docs">
    <a href={ devDocsUrl } title="DevDocs">
      { docs }
    </a>
  </span>
);

const Badge = ( {
  abTestHelper,
  badge,
  branchName,
  commitChecksum,
  devDocs,
  devDocsURL: devDocsUrl,
  docs,
  feedbackURL: feedbackUrl
} ) => (
	<div className="environment-badge">
		{ abTestHelper && <div className="environment is-tests" /> }
		{ branchName && branchName !== 'master' &&
      <BranchName branchName={ branchName } commitChecksum={ commitChecksum } />
    }
		{ devDocs && <DevDocsLink devdocsURL={ devDocsUrl } docs={ docs } /> }
		<span className={ 'environment is-' + badge }>
			{ badge }
		</span>
		<a href={ feedbackUrl } title="Report an issue" target="_blank" rel="noopener noreferrer" className="bug-report" />
	</div>
);

export default Badge;
