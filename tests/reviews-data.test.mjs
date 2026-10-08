import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { videoReviews } from '../app/reviews/data.ts';

test('videoReviews contains exactly 10 unique videos', () => {
  assert.equal(videoReviews.length, 10);
  const srcSet = new Set(videoReviews.map(r => r.videoSrc));
  assert.equal(srcSet.size, 10);
});

test('videoReviews have valid id, videoSrc, and poster that exist on disk', () => {
  for (const review of videoReviews) {
    assert.ok(review.id, 'Review must have an id');
    assert.ok(review.videoSrc.startsWith('/reviews/'));
    assert.ok(review.videoSrc.endsWith('.mp4'));
    assert.ok(!review.videoSrc.includes(' (1).mp4'), 'Must not include duplicate (1) file');
    assert.ok(review.poster.startsWith('/reviews/thumbnails/'));
    assert.ok(review.poster.endsWith('.jpg'));

    const videoDiskPath = path.join(process.cwd(), 'public', review.videoSrc);
    const posterDiskPath = path.join(process.cwd(), 'public', review.poster);
    assert.ok(fs.existsSync(videoDiskPath), `Video file must exist: ${videoDiskPath}`);
    assert.ok(fs.existsSync(posterDiskPath), `Poster file must exist: ${posterDiskPath}`);
  }
});

