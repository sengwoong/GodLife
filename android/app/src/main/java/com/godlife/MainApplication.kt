package com.godlife

import android.app.Application
import com.facebook.react.ReactApplication
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.shell.MainReactPackage
import com.facebook.soloader.SoLoader
import com.facebook.react.ReactNativeHost
import com.facebook.react.PackageList
import com.facebook.react.ReactPackage

class MainApplication : Application(), ReactApplication {

    private val mReactNativeHost: ReactNativeHost = object : ReactNativeHost(this) {
        override fun getUseDeveloperSupport(): Boolean {
            return BuildConfig.DEBUG // Debug 모드에서만 개발자 지원을 사용
        }

        override fun getPackages(): List<ReactPackage> {
            return PackageList(this).packages // 필요한 ReactNative 패키지들 반환
        }

        override fun getJSMainModuleName(): String {
            return "index" // React Native 앱의 진입점 파일 이름
        }
    }

    override fun getReactNativeHost(): ReactNativeHost {
        return mReactNativeHost
    }

    override fun onCreate() {
        super.onCreate()
        SoLoader.init(this, false) // React Native의 SoLoader 초기화
    }
}
