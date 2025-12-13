export default function MongoDBGuidePage() {
  return (
    <div className="prose">
      <h1>MongoDB Guide</h1>
      <p>
        Use MongoDB with Mongoose for flexible, schema-based data modeling in your Express.js application.
      </p>

      <h2>Initialize with MongoDB</h2>
      <pre><code>xacos init my-api --ts --mongodb</code></pre>

      <h2>Connection Setup</h2>
      <p>Configure your MongoDB connection in <code>.env</code>:</p>
      <pre><code>MONGODB_URI=mongodb://localhost:27017/mydb</code></pre>

      <h2>Define Models</h2>
      <p>Create Mongoose schemas in <code>src/models</code>:</p>
      <pre><code>{`import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  email: string;
  name: string;
  password: string;
  createdAt: Date;
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IUser>('User', UserSchema);`}</code></pre>

      <h2>CRUD Operations</h2>
      <pre><code>{`import User from '../models/user.model';

// Create
const user = await User.create({
  email: 'user@example.com',
  name: 'John Doe',
  password: 'hashed_password'
});

// Read
const users = await User.find({ active: true });
const user = await User.findById(id);

// Update
await User.findByIdAndUpdate(id, { name: 'New Name' });

// Delete
await User.findByIdAndDelete(id);`}</code></pre>

      <h2>Indexes and Performance</h2>
      <pre><code>{`UserSchema.index({ email: 1 });
UserSchema.index({ createdAt: -1 });
UserSchema.index({ name: 'text' });`}</code></pre>
    </div>
  );
}
