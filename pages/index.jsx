import PropTypes from 'prop-types'

import Head from 'next/head'

const propTypes = {
    user: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string.isRequired,
  }),
};

const defaultProps = {
  user: null,
};

const Index = ({ user }) => (
  <div style={{ padding: '10px 45px' }}>
    <Head>
      <title>Index page</title>
      <meta name="description" content="This is the description of the Index page" />
    </Head>
    <p>All this work for some black text on white background.</p>
    <p>
      <a href="https://angeldude.github.io">Go here for my blog</a>
    </p>
    <p>
      Email:&nbsp;
      {user.email}
    </p>
  </div>
)

Index.getInitialProps = async (ctx) => ({ user: JSON.parse(ctx.query.user) });

Index.propTypes = propTypes;
Index.defaultProps = defaultProps;

export default Index;
