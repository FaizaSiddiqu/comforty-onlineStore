export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-19'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "skQE14ntN9DHVDTRDxbZImQA0b3JSqooGWxKzo94wPoWTKfZdQrNKJrIwcmEPv79ozIhov9jkAzfX22FFQfq2SbYuPf4iqcZIXFbWDWRdSXzWr52AUX2Uz5TQa3iEEsN0kt2gL0xmOgpX2IYtScUUUWVYsyg0X4N2ykT1MMh6UTIuJOtateO",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
