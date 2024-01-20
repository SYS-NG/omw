import {
  Adapt,
  Anchor,
  Button,
  H2,
  Label,
  Paragraph,
  ScrollView,
  Select,
  Separator,
  Sheet,
  Theme,
  Text,
  XStack,
  YStack,
  getFontSize,
} from '@my/ui'
import React, { useMemo, useState } from 'react'
import { DarkTheme, DefaultTheme } from '@react-navigation/native'
import { useColorScheme } from 'react-native'
import { Check, ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import { LinearGradient } from 'tamagui/linear-gradient'

export function PaymentSettingsScreen() {
  const [contentHeight, setContentHeight] = useState(0)
  const [scrollViewHeight, setScrollViewHeight] = useState(0)
  const [currencyVal, setCurrencyVal] = useState('cad')
  const scheme = useColorScheme()

  const handleContentSizeChange = (_contentWidth, height) => {
    setContentHeight(height)
  }

  const handleScrollViewLayout = (event) => {
    setScrollViewHeight(event.nativeEvent.layout.height)
  }

  const isScrollingEnabled = contentHeight > scrollViewHeight

  return (
    <YStack style={{ flex: 1 }}>
      <ScrollView
        onContentSizeChange={handleContentSizeChange}
        onLayout={handleScrollViewLayout}
        scrollEnabled={isScrollingEnabled}
        stickyHeaderIndices={[0]}
        stickyHeaderHiddenOnScroll={true}
        showsVerticalScrollIndicator={false}
      >
        <YStack p={'$4'}>
          <XStack ai={'center'}>
            <Label f={1} fb={0}>
              Currency
            </Label>
            <Select
              id="currency"
              value={currencyVal}
              onValueChange={setCurrencyVal}
              disablePreventBodyScroll
            >
              <Select.Trigger width={220} iconAfter={ChevronDown}>
                <Select.Value placeholder="Something" />
              </Select.Trigger>

              <Adapt when="sm" platform="touch">
                <Sheet
                  native={true}
                  modal
                  dismissOnSnapToBottom
                  animationConfig={{
                    type: 'spring',
                    damping: 50,
                    mass: 0.1,
                  }}
                >
                  <Sheet.Frame>
                    <Sheet.ScrollView>
                      <Adapt.Contents />
                    </Sheet.ScrollView>
                  </Sheet.Frame>
                  <Sheet.Overlay
                    animation="quick"
                    enterStyle={{ opacity: 0 }}
                    exitStyle={{ opacity: 0 }}
                  />
                </Sheet>
              </Adapt>

              <Select.Content zIndex={200000}>
                <Select.Viewport minWidth={200}>
                  <Select.Group>
                    <Select.Label>Currency</Select.Label>
                    {/* for longer lists memoizing these is useful */}
                    {useMemo(
                      () =>
                        currencyCodes.map((item, i) => {
                          return (
                            <Select.Item index={i} key={item.code} value={item.code.toLowerCase()}>
                              <Select.ItemText>{item.name}</Select.ItemText>
                              <Select.ItemIndicator marginLeft="auto">
                                <Check size={16} />
                              </Select.ItemIndicator>
                            </Select.Item>
                          )
                        }),
                      [currencyCodes]
                    )}
                  </Select.Group>
                </Select.Viewport>

                <Select.ScrollDownButton
                  alignItems="center"
                  justifyContent="center"
                  position="relative"
                  width="100%"
                  height="$3"
                >
                  <YStack zIndex={10}>
                    <ChevronDown size={20} />
                  </YStack>
                  <LinearGradient
                    start={[0, 0]}
                    end={[0, 1]}
                    fullscreen
                    colors={['transparent', '$background']}
                    borderRadius="$4"
                  />
                </Select.ScrollDownButton>
              </Select.Content>
            </Select>
          </XStack>
        </YStack>
      </ScrollView>
    </YStack>
  )
}

const currencyCodes = [
  { name: 'US Dollar', code: 'USD' },
  { name: 'Euro', code: 'EUR' },
  { name: 'Japanese Yen', code: 'JPY' },
  { name: 'British Pound Sterling', code: 'GBP' },
  { name: 'Australian Dollar', code: 'AUD' },
  { name: 'Canadian Dollar', code: 'CAD' },
  { name: 'Swiss Franc', code: 'CHF' },
  { name: 'Chinese Yuan', code: 'CNY' },
  { name: 'Swedish Krona', code: 'SEK' },
  { name: 'New Zealand Dollar', code: 'NZD' },
  { name: 'South Korean Won', code: 'KRW' },
  { name: 'Singapore Dollar', code: 'SGD' },
  { name: 'Norwegian Krone', code: 'NOK' },
  { name: 'Mexican Peso', code: 'MXN' },
  { name: 'Indian Rupee', code: 'INR' },
  { name: 'Hong Kong Dollar', code: 'HKD' },
  { name: 'Brazilian Real', code: 'BRL' },
  { name: 'Russian Ruble', code: 'RUB' },
  { name: 'South African Rand', code: 'ZAR' },
  { name: 'Turkish Lira', code: 'TRY' },
  { name: 'Indonesian Rupiah', code: 'IDR' },
  { name: 'Danish Krone', code: 'DKK' },
  { name: 'Polish Złoty', code: 'PLN' },
  { name: 'Thai Baht', code: 'THB' },
  { name: 'Malaysian Ringgit', code: 'MYR' },
  { name: 'Hungarian Forint', code: 'HUF' },
  { name: 'Chilean Peso', code: 'CLP' },
  { name: 'Philippine Peso', code: 'PHP' },
  { name: 'Israeli New Shekel', code: 'ILS' },
  { name: 'Czech Koruna', code: 'CZK' },
  { name: 'Colombian Peso', code: 'COP' },
  { name: 'Saudi Riyal', code: 'SAR' },
  { name: 'United Arab Emirates Dirham', code: 'AED' },
  { name: 'Egyptian Pound', code: 'EGP' },
  { name: 'Nigerian Naira', code: 'NGN' },
  { name: 'Argentine Peso', code: 'ARS' },
  { name: 'Kuwaiti Dinar', code: 'KWD' },
  { name: 'Qatari Riyal', code: 'QAR' },
  { name: 'Peruvian Sol', code: 'PEN' },
  { name: 'Vietnamese đồng', code: 'VND' },
  { name: 'Ukrainian Hryvnia', code: 'UAH' },
  { name: 'Romanian Leu', code: 'RON' },
  { name: 'Moroccan Dirham', code: 'MAD' },
  { name: 'Bangladeshi Taka', code: 'BDT' },
  { name: 'Omani Rial', code: 'OMR' },
  { name: 'Belarusian Ruble', code: 'BYN' },
  { name: 'Kazakhstani Tenge', code: 'KZT' },
  { name: 'Costa Rican Colón', code: 'CRC' },
  { name: 'Uruguayan Peso', code: 'UYU' },
]
