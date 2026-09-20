import assert from 'node:assert/strict';
import test from 'node:test';
import { videoReviews } from '../app/reviews/data.ts';

test('videoReviews contains exactly 6 unique videos', () => {
  assert.equal(videoReviews.length, 6);
  const srcSet = new Set(videoReviews.map(r => r.videoSrc));
  assert.equal(srcSet.size, 6);
});

test('videoReviews have valid id and videoSrc', () => {
  for (const review of videoReviews) {
    assert.ok(review.id, 'Review must have an id');
    assert.ok(review.videoSrc.startsWith('/reviews/'));
    assert.ok(review.videoSrc.endsWith('.mp4'));
    assert.ok(!review.videoSrc.includes(' (1).mp4'), 'Must not include duplicate (1) file');
  }
});
