import Link from 'next/link';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import { styleToolbar } from './SharedStyles';
import MenuWithAvatar from './MenuWithAvatar';

const optionsMenu = [
  {
    text: "Got questions?",
    href: "https://github.com/Angeldude"
  },
  {
    text: 'Log out',
    href: '/logout',
    anchor: true,
  },
];

const propTypes = {
  user: PropTypes.shape({
    avatarUrl: PropTypes.string,
    displayName: PropTypes.string,
  }),
};

const defaultProps = {
  user: null,
};

function Header({ user }) {
  return (
    <div>
      <Toolbar style={styleToolbar}>
        <Grid container direction="row" justifyContent="space-around" align="center">
          <Grid item sm={11} xs={9} style={{ textAlign: 'left' }}>
            {user ? null : (
              <Link href='/'>
                <Avatar
                  src="https://storage.googleapis.com/builderbook/logo.svg"
                  alt="Builder Book logo"
                  style={{ margin: '0px auto 0px 20px', cursor: 'pointer' }} />
              </Link>
            )}
          </Grid>
          <Grid item sm={1} xs={3} style={{ textAlign: 'right' }}>
            {user ? (
              <div style={{ whiteSpace: 'nowrap' }}>
                {user.avatarUrl ? (
                  <MenuWithAvatar
                    options={optionsMenu}
                    src={user.avatarUrl}
                    alt={user.displayName}
                  />
                ) : null}
              </div>
            ) : (
              <Link href="/login" style={{ margin: '0px 20px 0px auto' }}>
                Log in
              </Link>
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </div>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
export default Header;
