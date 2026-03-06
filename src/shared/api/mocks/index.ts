export async function enableMocking() {
  if (import.meta.env.PROD) {
    return;
  }

  const { worker } = await import('@/shared/api/mocks/browser');
  await worker.start();
}
