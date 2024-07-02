import Link from 'next/link';

const Header = () => {
  return (
    <div>
      <Link href="/login" legacyBehavior>
        <a style={{ margin: '0px 20px 0px auto' }}>Log in</a>
      </Link>
    </div>
  );
};

export default Header;
