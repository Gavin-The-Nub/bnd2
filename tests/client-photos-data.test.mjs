import assert from 'node:assert/strict';
import test from 'node:test';
import fs from 'node:fs';
import path from 'node:path';
import { clientPhotos } from '../app/reviews/clientPhotosData.ts';

test('clientPhotos contains all 71 client photos', () => {
  assert.equal(clientPhotos.length, 71);
  const idSet = new Set(clientPhotos.map(p => p.id));
  assert.equal(idSet.size, 71, 'All photo IDs must be unique');
});

test('every clientPhoto references a real file in public/clientPhotos', () => {
  for (const photo of clientPhotos) {
    assert.ok(photo.id, 'Photo must have an id');
    assert.ok(photo.file, 'Photo must have a filename');
    assert.ok(photo.src.startsWith('/clientPhotos/'), 'Photo src must start with /clientPhotos/');
    assert.ok(photo.width > 0, 'Photo must have valid width');
    assert.ok(photo.height > 0, 'Photo must have valid height');

    const filePath = path.join(process.cwd(), 'public', 'clientPhotos', photo.file);
    assert.ok(fs.existsSync(filePath), `File must exist on disk: ${filePath}`);
  }
});
