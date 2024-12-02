package com.godlife

import android.os.Bundle
import com.facebook.react.ReactActivity

class MainActivity : ReactActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
    }

    override fun getMainComponentName(): String {
        return "GodLife" // React Native 앱의 메인 컴포넌트 이름을 반환합니다.
    }
}
