#import <React/RCTBridgeDelegate.h>
#import <UIKit/UIKit.h>
#import <Firebase.h>

@interface AppDelegate : UIResponder <UIApplicationDelegate, RCTBridgeDelegate>

@property (nonatomic, strong) UIWindow *window;

@property (strong, nonatomic) FIRDatabaseReference *ref;

//self.ref = [[FIRDatabase database] reference];

@end
