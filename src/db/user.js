import Database from 'db/db';

const db = new Database();

exports.getUserCount = async () => {
  try {
    const rows = await db.run('SELECT COUNT(*) FROM datastore_user');
    return rows;
  } catch (e) {
    throw e;
  }
};